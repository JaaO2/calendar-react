import React, {useState, useRef} from 'react'

function DateInputDialog(props : any) : JSX.Element {

    const date : Date = props.date;
    const setDate : Function = props.setDate;
    const isDialogOpen : Boolean = props.isDialogOpen;
    const setDialogOpen : Function = props.setDialogOpen;
    const dateInputRef : React.MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>();
    const display : Object = {display: isDialogOpen ? "block" : "none"};

    const [defaultValue, setDefaultValue] = useState<string>(props.date.getFullYear() + "-" + (props.date.getMonth()+1))

    const setMonthInInput = (event : React.ChangeEvent<HTMLInputElement>) : void => {
        const newDateValue : string = event.target.value;
        setDefaultValue(newDateValue);
    }

    const setMonth  = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) : void => {
        const newDateValue : string = dateInputRef.current.value;
        const [year, month] = newDateValue.split('-').map(value => parseInt(value, 10)) as [number, number];
        setDate(new Date(year, month-1));
        setDialogOpen(false);
    }

  return (
    <div className="DateInputDialog" style={display}>
        <p>Wybierz miesiąc</p>
        <input ref={dateInputRef} onChange={e => setMonthInInput(e)} type="month" value={defaultValue} />
        <button onClick={e => setMonth(e)}>Wybierz</button>
    </div>
  )
}

export default DateInputDialog
