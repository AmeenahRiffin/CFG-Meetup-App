
import './App.css'
import UserDisplay from '../components/UserDisplay'
import EventDisplay from '../components/EventDisplay'
import UserDisplayView from '../components/UserDisplayView'
import EventDisplayView from '../components/EventDisplayView'

function App() {
  return (
    <>
      <h1>Component Guide</h1>

      <p>Hi team, this is a component guide for the frontend of the neighbourhood app. You may replace this page, the 
        components, and the css with your own. This is a test and a guide for the frontend showing the backend links that
        have been implemented. I have done it this way to make it as simple as possible so you do not have to worry about
        any backend stuff.
      </p>

      <p>These are the most common bases of displays, likely used for listings and searches.</p>
      <UserDisplay user_f_name={"John"} user_l_name={"Doe"} />
      <EventDisplay eventTitle={"Example Event"} eventType={"Type of Event"} eventDate={"2024-12-01"} eventLocation={"Mysterious Place"} eventPrice={10}
      eventPostcode='SW1A 1AA' eventContent={"This is a test event"}/>


      <h1>User Display View</h1>

      <p>
        I have implemented the ability to paginate the user display based on api results, to save time. 
        This one specifically is set to 5 entries per page and pulls from the http://localhost:5000/users api. See below:</p>


      <h3>All Users</h3>
      
      <UserDisplayView apiLink='http://localhost:5000/users' entriesPerPage={5}/>

      <h3>Users by Postcode</h3>
      
      <p>In this case it is SW1A 1AA - since two users have this postcode </p>

      <UserDisplayView apiLink='http://localhost:5000/users/postcode/SW1A 1AA' entriesPerPage={5}/>


      <h1>Event Display View</h1>

      <p>This shows us all events, just like users it shows by api call - for convienience.</p>

      <h3>All Events</h3>

      <EventDisplayView apiLink='http://localhost:5000/events' entriesPerPage={5}/>

      <h3>Events by Type</h3>

      <p>In this case it is Educational Events. </p>

      <EventDisplayView apiLink={`http://localhost:5000/events/category/Educational Events`} entriesPerPage={5}/>

      <h3>Events Closest to User</h3>

      <p>Say we have a user, and we want to find the closest event to them. We can do that here. User ID - 5 is the user we want to find events for:
        They live in M1 1AE - but there are many events that are close to them. </p>

      <EventDisplayView apiLink={`http://localhost:5000/events/nearest/5`} entriesPerPage={5}/>
      
      
    </>
  )
}

export default App

