import React, { Component } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';

require('moment/locale/es.js');

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Informacion del Dia",
    start: new Date('2023-11-27T10:22:00'),
    end: new Date('2023-11-27T10:42:00')
  },
];



class EventsCalendar extends Component {

  
  handleEventClick = (event) => {
    // Formatear la fecha en formato ddmmaaaa
    const formattedDate = moment(event.start).format('DDMMYYYY');

    // Redirigir usuario a la página de la cita con la fecha formateada
    window.location.href = `/infodia/`; //${formattedDate} agregar fecha
  };

  render() {
    return (
      <div style={{ height: `${500}px` }} className="bigCalendar-container">
        <BigCalendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          messages={{
            next: "sig",
            previous: "ant",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Dia"
          }}
          onSelectEvent={this.handleEventClick}
        />
      </div>
    );
  }
}

export default EventsCalendar;
