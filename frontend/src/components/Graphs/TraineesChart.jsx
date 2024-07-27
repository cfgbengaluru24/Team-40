import * as React from "react";
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    ColumnSeries,
    Legend,
    Category,
    Tooltip,
    DataLabel,
} from "@syncfusion/ej2-react-charts";
import "./TraineesChart.css"; // Import the CSS file for styling

function TraineesChart() {
    const data = [
        { month: "Jan", trainees: 25 },
        { month: "Feb", trainees: 30 },
        { month: "Mar", trainees: 22 },
        { month: "Apr", trainees: 28 },
        { month: "May", trainees: 34 },
        { month: "Jun", trainees: 26 },
        { month: "Jul", trainees: 31 },
        { month: "Aug", trainees: 29 },
        { month: "Sep", trainees: 35 },
        { month: "Oct", trainees: 27 },
        { month: "Nov", trainees: 32 },
        { month: "Dec", trainees: 30 },
    ];

    const primaryxAxis = { valueType: "Category", title: "Months" };
    const primaryyAxis = {
        minimum: 0,
        maximum: 40,
        interval: 5,
        title: "Number of Trainees",
    };

    return (
        <div className="chart-container">
            <ChartComponent
                id="trainees-chart"
                primaryXAxis={primaryxAxis}
                primaryYAxis={primaryyAxis}
                title="Monthly Trainee Statistics"
                className="chart"
            >
                <Inject
                    services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}
                />
                <SeriesCollectionDirective>
                    <SeriesDirective
                        dataSource={data}
                        xName="month"
                        yName="trainees"
                        type="Column"
                        name="Trainees"
                    />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
}

export default TraineesChart;