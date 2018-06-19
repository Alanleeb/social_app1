import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updateApp, addApp } from '../reducers/apps'

class AppForm extends React.Component {
  initialState = {
    author: '', 
    body: '', 
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { author, value } = e.target
    this.setState({ [author]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = this.state
    const { closeForm, dispatch } = this.props
    const myFunc = this.props.id ? updatePost : addPost
    dispatch(myFunc(post))
    this.setState({...this.initialState})
    closeForm()
  }

  render() {
    const { author, body } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="author"
          required
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm)