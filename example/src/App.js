import React from 'react'
import { View, Button } from '@ps-aux/react-basic-components'

const App = () =>
    <View>
        <Button label="Hello"
                onClick={() => window.alert('Yeah, it works')}/>
    </View>

export default App
