const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.units}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} units={props.parts[0].units} />
      <Part name={props.parts[1].name} units={props.parts[1].units} />
      <Part name={props.parts[2].name} units={props.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}
    </p>
  )
}

const Footer = (props) => {
  return <footer>{props.fullName} - {props.courseCode} - {props.section}</footer>
}

const App = () => {
  const course = {
    name: 'Information Technology',
    parts: [
      {
        name: 'CSIT340 - Industry Elective',
        units: 3
      },
      {
        name: 'CSIT327 - Information Manaagement 2',
        units: 3
      },
      {
        name: 'IT317 - Project Management for IT',
        units: 3
      }
    ]
  }

  const fullName = 'Raul Marconi P. Mondido'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App