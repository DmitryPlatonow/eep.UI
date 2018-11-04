// import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button, FormControlLabel, TextField, InputLabel, Checkbox } from "@material-ui/core"



// class App extends Component {
//   state = {
//     projectName: '',
//     description: '',
//     startProjectDate: null,
//     endProjectDate: null,
//     projectState: false
//   }

//   createProject = () => {
//     console.log(this.state);
//     fetch('http://localhost:50317/api/projects/create',  {
//       method: "post",
//       headers: {
//         'Content-type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify(this.state)
//     })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log(result)
//     })
//   }

//   render() {
//     const {
//       projectName,
//       description,
//       startProjectDate,
//       endProjectDate,
//       projectState
//     } = this.state;

//     return (
//       <div className="App">

//         <div className="create-project-form">

//           <TextField
//             value={projectName}
//             label="Project Name"
//             onChange={({ target: { value } }) => this.setState({ projectName: value })} // = { target: { value } } = event.target.value
//           />
//           <TextField
//            value={description}
//            label="Description"
//            onChange={({ target: { value } }) => this.setState({ description: value })}
//           /> 
//           <TextField
//             label="Select start date of project"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={startProjectDate}
//             onChange={(event) => this.setState({ startProjectDate: event.target.value })}
//           />
//           <TextField
//             label="Select end date of project "
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={endProjectDate}
//             onChange={(event) => this.setState({ endProjectDate: event.target.value })}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 value={projectState}
//                 onChange={(event) => this.setState({ projectState: event.target.checked })}
//               />
//             }
//             label="Is project closed?"
//           />
//           <Button onClick={this.createProject} >Add Project</Button>
//         </div>
//       </div>

//     );
//   }
// }

// export default App;