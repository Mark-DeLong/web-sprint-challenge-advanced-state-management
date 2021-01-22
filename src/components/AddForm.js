import React from 'react'
import { addNewSmurf, postSmurfs } from '../actions'
import { connect } from 'react-redux'


class AddForm extends React.Component {

    

    render() {
        
        
        console.log(this.props)
        const { formValues } = this.props

        console.log(formValues, "this is not a string")


        console.log(formValues.name)

        const handleChange = (key, value) => {
            addNewSmurf({ ...formValues, [key]: value })
        }

        const onSubmit = () => {
            postSmurfs(formValues)
        }

        return(<section>
            <h2>Add Smurf</h2>
            <form>
                <div 
                    className="form-group"
                >
                    <label 
                        htmlFor="name"
                    >
                        Name:
                    </label>
                    <br/>
                    <input 
                        onChange={(e) => handleChange('name', e.target.value)} 
                        name="name" 
                        id="name" 
                        type="text"
                        value={formValues.name} 
                    />
                    <label 
                        htmlFor="name"
                    >
                        Position:
                    </label>
                    <br/>
                    <input 
                        onChange={(e) => handleChange('position', e.target.value)} 
                        name="position" 
                        id="position" 
                        type="text"
                        value={formValues.position}
                    />
                    <label 
                        htmlFor="name"
                    >
                        Nickname:
                    </label>
                    <br/>
                    <input 
                        onChange={(e) => handleChange('nickname', e.target.value)}  
                        name="nickname" 
                        id="nickname" 
                        type="text"
                        value={formValues.nickname}
                    />
                    <label 
                        htmlFor="name"
                    >Description:
                    </label>
                    <br/>
                    <input 
                       onChange={(e) => handleChange('description', e.target.value)} 
                        name="description" 
                        id="description" 
                        value={formValues.description}
                    />
                </div>

                <div 
                    data-testid="errorAlert" 
                    className="alert alert-danger" 
                    role="alert"
                >
                    Error: 
                </div>
                <button
                    onClick={onSubmit}
                    type="submit"
                >
                    Submit Smurf
                </button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        formValues:state.formValues,
    }
  }

export default connect(mapStateToProps, {addNewSmurf, postSmurfs})(AddForm)
