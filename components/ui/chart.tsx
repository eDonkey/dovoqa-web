"use client"

import * as React from "react"
import { Label } from "@radix-ui/react-label"
import {
  type ChartConfig,
  ChartContainer as RechartsChartContainer,
  ChartTooltip as RechartsChartTooltip,
  ChartTooltipContent as RechartsChartTooltipContent,
} from "recharts"

import { cn } from "@/lib/utils"

const ChartContext = React.createContext<ChartContextType | null>(null)

type ChartContextType = {
  config: ChartConfig
}

function ChartProvider({
  config,
  children,
}: {
  config: ChartConfig
  children: React.ReactNode
}) {
  return <ChartContext.Provider value={{ config }}>{children}</ChartContext.Provider>
}

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    config: ChartConfig
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId}`
  return (
    <ChartProvider config={config}>
      <RechartsChartContainer
        id={chartId}
        ref={ref}
        className={cn(
          "flex h-[350px] w-full flex-col [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-dot[stroke='#fff']]:stroke-background [&_.recharts-tooltip-content]:rounded-md [&_.recharts-tooltip-content]:border-border [&_.recharts-tooltip-content]:bg-background [&_.recharts-tooltip-content]:text-foreground [&_[data-orientation=bottom]]:translate-y-1 [&_[data-orientation=left]]:-translate-x-1 [&_.recharts-active-dot]:stroke-background [&_.recharts-active-dot]:fill-current [&_.recharts-active-dot]:[stroke-dasharray:unset] [&_.recharts-brush-texts]:fill-foreground [&_.recharts-linear-gradient]:[stop-color:var(--color-foreground)] [&_.recharts-tooltip-item]:flex",
          className,
        )}
        {...props}
      >
        {children}
      </RechartsChartContainer>
    </ChartProvider>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = RechartsChartTooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RechartsChartTooltipContent> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "dot" | "dashed" | false
    nameKey?: string
    labelKey?: string
  }
>(({ className, hideLabel = false, hideIndicator = false, indicator = "dot", nameKey, labelKey, ...props }, ref) => {
  const { config } = useChart()

  return (
    <RechartsChartTooltipContent
      ref={ref}
      className={cn("grid min-w-[130px] gap-0.5", indicator === "dashed" && "pr-6", className)}
      indicator={indicator}
      config={config}
      hideLabel={hideLabel}
      hideIndicator={hideIndicator}
      nameKey={nameKey}
      labelKey={labelKey}
      {...props}
    />
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    content?: React.ComponentPropsWithoutRef<typeof RechartsChartContainer>["children"]
    nameKey?: string
  }
>(({ content, className, nameKey, ...props }, ref) => {
  const { config } = useChart()
  return (
    <div ref={ref} className={cn("flex flex-wrap items-center justify-center gap-4", className)} {...props}>
      {content ??
        Object.entries(config).map(([key, item]) => (
          <div key={key} className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-current">
            {item.icon ? (
              <item.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-full"
                style={{
                  backgroundColor: `hsl(var(--chart-${(item.color as string) || key}))`,
                }}
              />
            )}
            {item.label}
          </div>
        ))}
    </div>
  )
})
ChartLegend.displayName = "ChartLegend"

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "dot" | "dashed" | false
    nameKey?: string
    labelKey?: string
  }
>(({ className, ...props }, ref) => (
  <RechartsChartTooltipContent ref={ref} className={cn("grid min-w-[130px] gap-0.5", className)} {...props} />
))
ChartLegendContent.displayName = "ChartLegendContent"

const ChartLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof Label> & {
    config?: ChartConfig
    name?: string
  }
>(({ className, config, name, ...props }, ref) => {
  const { config: contextConfig } = useChart()
  const chartConfig = config || contextConfig

  const item = name ? chartConfig[name] : undefined

  if (!item) {
    return null
  }

  return (
    <Label ref={ref} className={cn("flex items-center gap-1.5", className)} {...props}>
      {item.icon ? (
        <item.icon className="h-3 w-3 shrink-0" />
      ) : (
        <div
          className="h-2 w-2 shrink-0 rounded-full"
          style={{
            backgroundColor: `hsl(var(--chart-${(item.color as string) || name}))`,
          }}
        />
      )}
      {item.label}
    </Label>
  )
})
ChartLabel.displayName = "ChartLabel"

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartLabel }
