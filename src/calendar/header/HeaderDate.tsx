import React, {useState} from 'react';
import DateInputDialog from './DateInputDialog';

function HeaderDate(props : any) : JSX.Element {

    const [isDialogOpen, setDialogOpen] = useState<Boolean>(false);

    const date : Date = props.date;
    const setDate : Function = props.setDate;

    let headerMonth : string | null = date ? date.toLocaleDateString("pl-PL", {month: "long", year: "numeric"}) : null;
    headerMonth = headerMonth ? headerMonth[0].toUpperCase() + headerMonth.substring(1) : null;

    const setMonth = (direction : string & 'next' | 'previous') : void => {
        const directionIsNext : Boolean = direction === "next";
        const month : number = date.getMonth();
        const newMonth : number = directionIsNext ? month + 1 : month - 1;
        const currentDate : Date = date;
        const newDate : number = currentDate.setMonth(newMonth);
        setDate(new Date(newDate));
    };


  return (
    <>
    <div className="headerMonth">
        <div className="arrow" onClick={e => setMonth("previous")}>
            <span className="material-symbols-outlined">
                arrow_back
            </span>
        </div>
        <div onClick={e => setDialogOpen(true)} className="month">
            {headerMonth ? headerMonth : "Ładowanie..."}
        </div>
        <div className="arrow" onClick={e => setMonth("next")}>
            <span className="material-symbols-outlined">
                arrow_forward
            </span>
        </div>
    </div>
    <DateInputDialog date={date} setDate={setDate} isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} />
    </>
  );
}

export default HeaderDate;
