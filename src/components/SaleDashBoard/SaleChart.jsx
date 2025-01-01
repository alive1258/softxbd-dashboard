"use client";

import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 1300, pv: 2900, amt: 5400 },
  { name: "Feb", uv: 1800, pv: 2900, amt: 4000 },
  { name: "Mar", uv: 9900, pv: 2000, amt: 3000 },
  { name: "Apr", uv: 2500, pv: 7200, amt: 4500 },
  { name: "May", uv: 2800, pv: 3500, amt: 8200 },
  { name: "Jun", uv: 3200, pv: 8000, amt: 5800 },
  { name: "Jul", uv: 4000, pv: 4500, amt: 6200 },
  { name: "Aug", uv: 6800, pv: 4200, amt: 6100 },
  { name: "Sep", uv: 3600, pv: 3900, amt: 9900 },
  { name: "Oct", uv: 5400, pv: 7700, amt: 5700 },
  { name: "Nov", uv: 3000, pv: 3400, amt: 5500 },
  { name: "Dec", uv: 2800, pv: 3200, amt: 5400 },
];

export default class SaleChart extends PureComponent {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray=".2" />
            <XAxis dataKey="name" />
            <YAxis axisLine={false} />
            <Tooltip />

            {/* Area for "pv" */}
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#3C50E0"
              fill="url(#blueGradient)"
              fillOpacity={0.6}
              activeDot={{ r: 0 }}
            />

            {/* Area for "uv" */}
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FF4234"
              fill="url(#redGradient)"
              fillOpacity={0.6}
              activeDot={{ r: 0 }}
            />

            {/* Area for "amt" */}
            <Area
              type="monotone"
              dataKey="amt"
              stroke="#22C55E"
              fill="url(#greenGradient)"
              fillOpacity={0.6}
              activeDot={{ r: 0 }}
            />

            <defs>
              {/* Gradient for "pv" */}
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3C50E0" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#3C50E0" stopOpacity={0} />
              </linearGradient>

              {/* Gradient for "uv" */}
              <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF4234" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#FF4234" stopOpacity={0} />
              </linearGradient>

              {/* Gradient for "amt" */}
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
