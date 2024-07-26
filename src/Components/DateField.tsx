import React from "react";
import { DatePicker, Portal } from "@ark-ui/react";
import "./DateField.css";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { formActions } from "../store/formSlice";

interface DateFieldProps {
  label: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DateField({ label, value, setValue }: DateFieldProps) {
  const dispatch: AppDispatch = useDispatch();
  var myDob: string = "2000-12-01"; // Ensure day and month are always two digits

  const handleValueChange = (details: { value: any }) => {
    const day = details.value[0].day; // Ensure two digits
    const month = details.value[0].month; // Ensure two digits
    const year = details.value[0].year;

    myDob = `${month}-${day}-${year}`;

    const myDobArray = myDob.split("-");

    dispatch(formActions.updateForm({ dob: myDob }));
  };
  console.log(value);
  // Ensure initial value is split correctly
  const [year, month, day] = myDob.split("-");
  const myDobISO = `${year}-${month}-${day}`;

  return (
    <DatePicker.Root className="date-picker" onValueChange={handleValueChange}>
      <DatePicker.Label className="date-picker-label">
        {label}
        {" - Set For: "}
        {value}
      </DatePicker.Label>
      <DatePicker.Control className="date-picker-control">
        <DatePicker.Input className="date-picker-input" />
        <DatePicker.Trigger className="date-picker-trigger">
          📅
        </DatePicker.Trigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content className="date-picker-content">
            <DatePicker.YearSelect />
            <DatePicker.MonthSelect />
            <DatePicker.View view="day">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl className="date-picker-view-control">
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table className="date-picker-table">
                      <DatePicker.TableHead className="date-picker-table-head">
                        <DatePicker.TableRow className="date-picker-table-row">
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader
                              key={id}
                              className="date-picker-table-header"
                            >
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow
                            key={id}
                            className="date-picker-table-row"
                          >
                            {week.map((day, id) => (
                              <DatePicker.TableCell
                                key={id}
                                value={day}
                                className="date-picker-table-cell"
                              >
                                <DatePicker.TableCellTrigger className="date-picker-table-cell-trigger">
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl className="date-picker-view-control">
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table className="date-picker-table">
                      <DatePicker.TableBody>
                        {datePicker
                          .getMonthsGrid({ columns: 4, format: "short" })
                          .map((months, id) => (
                            <DatePicker.TableRow
                              key={id}
                              className="date-picker-table-row"
                            >
                              {months.map((month, id) => (
                                <DatePicker.TableCell
                                  key={id}
                                  value={month.value}
                                  className="date-picker-table-cell"
                                >
                                  <DatePicker.TableCellTrigger className="date-picker-table-cell-trigger">
                                    {month.label}
                                  </DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl className="date-picker-view-control">
                      <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger>
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table className="date-picker-table">
                      <DatePicker.TableBody>
                        {datePicker
                          .getYearsGrid({ columns: 4 })
                          .map((years, id) => (
                            <DatePicker.TableRow
                              key={id}
                              className="date-picker-table-row"
                            >
                              {years.map((year, id) => (
                                <DatePicker.TableCell
                                  key={id}
                                  value={year.value}
                                  className="date-picker-table-cell"
                                >
                                  <DatePicker.TableCellTrigger className="date-picker-table-cell-trigger">
                                    {year.label}
                                  </DatePicker.TableCellTrigger>
                                </DatePicker.TableCell>
                              ))}
                            </DatePicker.TableRow>
                          ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
}
