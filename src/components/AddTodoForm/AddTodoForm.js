import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import PropTypes from 'prop-types'
import {
  Input,
  Button,
  Row,
  Col,
  Container,
  styles as globalStyles,
} from '@wepow/aphrodite'

import styles from './AddTodoForm.css'

function AddTodoForm(props) {
  const legend = 'Create New Todo'
  const titleLabel = 'Title'
  const descriptionLabel = 'Description'
  const saveButton = 'Add Todo'

  const { handleSubmit } = props

  return (
    <form className={globalStyles.typography} onSubmit={handleSubmit}>
      <fieldset className={styles.addTodoForm}>
        <h1 className={globalStyles.heading1}>{legend}</h1>

        <Container isFluid tagName="ul">
          <Row middle="xs" start="xs" tagName="li" top="xs">
            <Col tagName="span" xs={3}>
              {titleLabel}
            </Col>

            <Col tagName="span" xs={9}>
              <Field
                component={Input}
                isBlock
                isDark
                name="title"
                placeholder={titleLabel}
                type="text"
              />
            </Col>
          </Row>

          <Row middle="xs" start="xs" tagName="li" top="xs">
            <Col tagName="span" xs={3}>
              {descriptionLabel}
            </Col>

            <Col tagName="span" xs={9}>
              <Field
                component={Input}
                isBlock
                isDark
                name="description"
                placeholder={descriptionLabel}
                type="text"
              />
            </Col>
          </Row>
        </Container>

        <Container isFluid>
          <Row end="xs">
            <Button isBlock kind="primary" type="submit">{saveButton}</Button>
          </Row>
        </Container>
      </fieldset>
    </form>
  )
}

AddTodoForm.propTypes = {
  handleSubmit: PropTypes.func,
}

export default reduxForm({
  form: 'addTodo',
})(AddTodoForm)
