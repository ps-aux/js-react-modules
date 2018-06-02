import React from 'react'

const List = ({
                  items, idProp = 'id', mapId,
                  component: Comp, render,
                  mapProps = p => p, itemProps = {}, ...rest
              }) => {
    if (render)
        return items.map((i, index) =>
            render({...itemProps, ...i}, index, rest))

    return items.map(i =>
        <Comp {...itemProps} {...mapProps(i)}/>)

}

export default List
