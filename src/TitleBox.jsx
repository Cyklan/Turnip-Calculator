import React, {Component} from "react"
import {
    Select,
    Box,
    MenuItem
} from "@material-ui/core"
import "./TitleBox.css"
import { func, arrayOf, string } from "prop-types"

export default class TitleBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "Cyki"
        }
    }

    componentDidMount = () => {
        // this.setState({
        //     user: this.props.currentUser
        // })
    }

    handleChange = event => {
        this.setState({
            user: event.target.value
        })
        this.props.handleUserChange(event.target.value)
    }

    render() {

        const users = this.props.priceBooks.map(book => book.user)
        const menuItems = users.map((user, i) => 
            <MenuItem key={i} value={user}>{user}</MenuItem>)

        return (
            <Box
                borderRadius={16}
                bgcolor="primary.light"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight={100}
            >
                <div style={{width: 300}}>
                    <Select
                            onChange={this.handleChange}
                            value={this.state.user}
                            width="100%"
                        >
                        {menuItems}
                    </Select> 
                </div>
            </Box>
        )
    }
}

TitleBox.propTypes = {
    priceBooks: arrayOf(Object).isRequired,
    handleUserChange: func.isRequired,
    currentUser: string.isRequired
}