// import React from "react";

// function NewMovieFunctional() {
//   const [name, setName] = React.useState("");
//   const [genre, setGenre] = React.useState("");

//   React.useEffect(() => {
//     alert("MOUNTED!!!");
//   }, []);

//   React.useEffect(() => {
//     alert("Genre changed!!!", genre);
//   }, [genre]);

//   function handleSubmit(event) {
//     alert(`A movie was submitted: ${name} ${genre}`);
//     event.preventDefault();
//   }

//   function handleGenreChange(event) {
//     setGenre(event.target.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={event => setName(event.target.value)}
//         />
//       </label>
//       <label>
//         Genre:
//         <input type="text" value={genre} onChange={handleGenreChange} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

// class NewMovie extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", genre: "" };

//     this.handleGenreChange = this.handleGenreChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     alert("MOUNTED");
//   }

//   componentDidUpdate() {
//     alert("Updated");
//   }

//   handleGenreChange(event) {
//     this.setState({ genre: event.target.value });
//   }

//   handleSubmit(event) {
//     alert(`A movie was submitted: ${this.state.name} ${this.state.genre}`);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={event => this.setState({ name: event.target.value })}
//           />
//         </label>
//         <label>
//           Genre:
//           <input
//             type="text"
//             value={this.state.genre}
//             onChange={this.handleGenreChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default NewMovie;
