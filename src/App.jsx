import React, { Component } from "react";
import { CssBaseline, ThemeProvider, Container } from "@material-ui/core";
import theme from "./theme";
// import { useFilters, useTitle } from "./utils";
import Chart from "./Chart";
import Title from "./Title";
import Footer from "./Footer";
import TitleBox from "./TitleBox"

// const App = () => {
//   // const { inputFilters, filters, saveFilters } = useFilters();

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Container maxWidth="md">
//           <Title />
//           <Filter filters={inputFilters} onChange={saveFilters} />
//           <Chart filter={filters} />
//           <Footer />
//         </Container>
//       </ThemeProvider>
//     </>
//   );
// };

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: "",
      filter: [],
      priceBooks: []
    }
  }

  handleUserChange = currentUser => {
    const book = this.state.priceBooks.filter(book => book.user === currentUser)[0]
    this.setState({
      currentUser,
      filter: book.pricelist
    })
  }

  componentDidMount = async () => {
    const res = await fetch("https://stonks.cyklan.de/").then(res => res.json())

    const book = res.filter(book => book.user === "Cyki")[0]
    this.setState({
      currentUser: "Cyki",
      priceBooks: res,
      filter: book.pricelist
    })
  }

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="md">
            <Title />
            <TitleBox 
              priceBooks={this.state.priceBooks} 
              handleUserChange={this.handleUserChange}
              currentUser={this.state.currentUser}/>
            <Chart filter={this.state.filter} />
            <Footer />
          </Container>
        </ThemeProvider>
      </>
    )
  }
}

export default App;
