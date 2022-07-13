import Table from 'react-bootstrap/Table';
import InterviewItem from "./InterviewItem";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

function Interview({ interviewList })
{
    const locales = {
        'en-US': enUS,
      }
      
    const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
    })

    function eventStyleGetter(event, start, end, isSelected) 
    {
        var backgroundColor = "#FFC0CB"
        var style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block'
            };

        return {
            style: style
        }
        };

        const interview = 
        {
            year: 2022,
            month: 6,
            day: 27,
            hour: 13,
            minute: 40
        }
    const allEvents = [
        {
            title: "Big Meeting",
            allDay: false,
            start: new Date(2022,5,25, 13, 30),
            end: new Date(2022, 5, 25, 17, 30),
            isFlight: true
        },
        {
            title: "Vacation",
            start: new Date(interview.year, interview.month, interview.day, interview.hour, interview.minute),
            end: new Date(2022, 6, 29),
            isTranspo: true
        },
        {
            title: "Conference",
            start: new Date(2022,6,28),
            end: new Date(2022, 6, 28)
        }
    ]

    const displayList = interviewList.map((item) =>
    {
        return (
            <InterviewItem item={ item } />
        )
    })

    return (
        <div className="interview">
            <h2 id="interviewTitle">Interviews</h2>

            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    { displayList }
                </tbody>
            </Table> */}


            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={(eventStyleGetter)}
            />
        </div>
    )
}
export default Interview