import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Container, 
  Header,
  Card,
  Image,
  Dropdown,
  Divider,
  Button,
} from 'semantic-ui-react'
import PostForm from './PostForm'

class Posts extends React.Component {
  state = { category: '', showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  apps = () => {
    const { posts } = this.props
    const { body } = this.state
    let visible = posts
    if (category)
      visible = posts.filter( a => a.body === bodyy )
    return visible.map( app =>
      <Card key={post.id}>
       
        <Card.Content>
          <Card.Meta>
            {app.author}
          </Card.Meta>
          <Card.Description>
            { app.body }
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }

  handleChange = (e, data) => {
    this.setState({ body: data.value })
  }

  render() {
    const { body, showForm } = this.state
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
            <AppForm closeForm={this.toggleForm} />
            :
            <div>
              <Dropdown
                placeholder="Filter by category"
                fluid
                selection
                options={this.categoryOptions()}
                value={category}
                onChange={this.handleChange}
              />
              { category && 
                  <Button
                    fluid
                    basic
                    onClick={() => this.setState({ bo: '' })}
                  >
                    Clear Filters
                  </Button>
              }
              <Divider />
              <Card.Group itemsPerRow={4}>
                { this.posts() }
              </Card.Group>
            </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { posts } = state
  const bodies = [...new Set(posts.map( a => a.body ))]
  return { 
    posts,
    bodies,
  }
}

//const mapDispatchToProps = (dispatch) => {
//  return { 
//    getApps: () => dispatch(getApps()),
//      doMath: (x,y) => x + y
//  }
//}

export default connect(mapStateToProps)(Posts)