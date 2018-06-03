import React, { Fragment } from 'react'

const List = ({
                  items, keyProp = 'id', mapKey,
                  component: Comp, render,
                  mapProps = p => p,
                  itemProps = {}
              }) => {

    const data = items
        .map(i => ({
            props: {...itemProps, ...mapProps(i)},
            key: mapKey ? mapKey(i) : i[keyProp]
        }))

    return <Fragment>
        {render ? data.map(({props, key}) => render(props, key))
            : data.map(({props, key}) => <Comp {...props} key={key}/>)
        }
    </Fragment>

}

export default List
