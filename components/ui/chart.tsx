"use client"

import * as React from "react"
import {
  BarChart as BarChartPrimitive,
  type BarChartProps as BarChartPrimitiveProps,
  LineChart as LineChartPrimitive,
  type LineChartProps as LineChartPrimitiveProps,
  AreaChart as AreaChartPrimitive,
  type AreaChartProps as AreaChartPrimitiveProps,
  DonutChart as DonutChartPrimitive,
  type DonutChartProps as DonutChartPrimitiveProps,
  PieChart as PieChartPrimitive,
  type PieChartProps as PieChartPrimitiveProps,
} from "@tremor/react"

import { cn } from "@/lib/utils"

const ChartPrimitive = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("w-full", className)} {...props} />,
)
ChartPrimitive.displayName = "ChartPrimitive"

const BarChart = React.forwardRef<HTMLDivElement, BarChartPrimitiveProps>(({ className, ...props }, ref) => (
  <ChartPrimitive ref={ref} className={cn(className)}>
    <BarChartPrimitive {...props} />
  </ChartPrimitive>
))
BarChart.displayName = "BarChart"

const LineChart = React.forwardRef<HTMLDivElement, LineChartPrimitiveProps>(({ className, ...props }, ref) => (
  <ChartPrimitive ref={ref} className={cn(className)}>
    <LineChartPrimitive {...props} />
  </ChartPrimitive>
))
LineChart.displayName = "LineChart"

const AreaChart = React.forwardRef<HTMLDivElement, AreaChartPrimitiveProps>(({ className, ...props }, ref) => (
  <ChartPrimitive ref={ref} className={cn(className)}>
    <AreaChartPrimitive {...props} />
  </ChartPrimitive>
))
AreaChart.displayName = "AreaChart"

const DonutChart = React.forwardRef<HTMLDivElement, DonutChartPrimitiveProps>(({ className, ...props }, ref) => (
  <ChartPrimitive ref={ref} className={cn(className)}>
    <DonutChartPrimitive {...props} />
  </ChartPrimitive>
))
DonutChart.displayName = "DonutChart"

const PieChart = React.forwardRef<HTMLDivElement, PieChartPrimitiveProps>(({ className, ...props }, ref) => (
  <ChartPrimitive ref={ref} className={cn(className)}>
    <PieChartPrimitive {...props} />
  </ChartPrimitive>
))
PieChart.displayName = "PieChart"

export { BarChart, LineChart, AreaChart, DonutChart, PieChart }
