import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    if(this.props.OnCreateContact)
      this.props.OnCreateContact(values)
  }
  render() {
    return (
      <div>
        <Link
          className="close-create-contact"
          to="/">Zurück
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Vor- und Nachname"/>
            <input type="text" name="email" placeholder="Email-Adresse"/>
            <button>Kontakt speichern</button>
          </div>

        </form>
      </div>
    )
  }
}
export default CreateContact
