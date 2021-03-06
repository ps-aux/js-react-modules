import React, { Fragment } from 'react'

const List = ({
                  items, keyProp = 'id', mapKey,
                  component: Comp, render,
                  mapProps = p => p,
                  itemProps = {}
              }) => {

    const data = items
        .map((i, index) => ({
            props: {...itemProps, ...mapProps(i, index)},
            key: mapKey ? mapKey(i, index) : i[keyProp]
        }))

    return <Fragment>
        {render ? data.map(({props, key}) => render(props, key))
            : data.map(({props, key}) => <Comp {...props} key={key}/>)
        }
    </Fragment>

}

export default List
