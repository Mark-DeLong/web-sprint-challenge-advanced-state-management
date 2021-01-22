import React from 'react'
import { formValues, postSmurfs } from '../actions'

class AddForm extends React.Component {

    handleChange = (key, value) => {
        postSmurfs({ ...formValues, [key]: value })
    }

    render() {
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
                        onChange={this.handleChange} 
                        name="name" 
                        id="name" 
                        value={this.state.name} 
                    />
                    <label 
                        htmlFor="name"
                    >
                        Position:
                    </label>
                    <br/>
                    <input 
                        onChange={this.handleChange} 
                        name="position" 
                        id="position" 
                        value={this.state.position}
                    />
                    <label 
                        htmlFor="name"
                    >
                        Nickname:
                    </label>
                    <br/>
                    <input 
                        onChange={this.handleChange} 
                        name="nickname" 
                        id="nickname" 
                        value={this.state.nickname}
                    />
                    <label 
                        htmlFor="name"
                    >Description:
                    </label>
                    <br/>
                    <input 
                        onChange={this.handleChange} 
                        name="description" 
                        id="description" 
                        value={this.state.description}
                    />
                </div>

                <div 
                    data-testid="errorAlert" 
                    className="alert alert-danger" 
                    role="alert"
                >
                    Error: 
                </div>
                <button>
                    Submit Smurf
                </button>
            </form>
        </section>);
    }
}

export default AddForm;
