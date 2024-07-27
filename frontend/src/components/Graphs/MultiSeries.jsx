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
    LineSeries,
} from "@syncfusion/ej2-react-charts";
import "./MultiSeries.css";

function MultiSeries() {
    const data = [
        { month: "Jan", profitA: 30, profitB: 45 },
        { month: "Feb", profitA: 40, profitB: 35 },
        { month: "Mar", profitA: 25, profitB: 55 },
        { month: "Apr", profitA: 50, profitB: 20 },
        { month: "May", profitA: 55, profitB: 40 },
        { month: "Jun", profitA: 20, profitB: 50 },
        { month: "Jul", profitA: 65, profitB: 30 },
        { month: "Aug", profitA: 70, profitB: 45 },
        { month: "Sep", profitA: 35, profitB: 65 },
        { month: "Oct", profitA: 80, profitB: 25 },
        { month: "Nov", profitA: 45, profitB: 55 },
        { month: "Dec", profitA: 60, profitB: 40 },
    ];

    const primaryxAxis = { valueType: "Category", title: "Months" };
    const primaryyAxis = {
        minimum: 0,
        maximum: 100,
        interval: 10,
        title: "Profit",
    };

    return (
        <div className="chart-container">
            <ChartComponent
                id="charts"
                primaryXAxis={primaryxAxis}
                primaryYAxis={primaryyAxis}
                title="Monthly Profit Statistics"
                className="chart"
            >
                <Inject
                    services={[
                        ColumnSeries,
                        Legend,
                        Tooltip,
                        DataLabel,
                        LineSeries,
                        Category,
                    ]}
                />
                <SeriesCollectionDirective>
                    <SeriesDirective
                        dataSource={data}
                        xName="month"
                        yName="profitA"
                        type="Column"
                        name="Investment"
                    />
                    <SeriesDirective
                        dataSource={data}
                        xName="month"
                        yName="profitB"
                        type="Column"
                        name="Profit B"
                    />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
}

export default MultiSeries;