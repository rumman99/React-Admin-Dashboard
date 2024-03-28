import { ResponsivePie } from '@nivo/pie';
import React from 'react';
import { mockPieData as data } from '../../data/mockData';
import { useTheme } from '@emotion/react';
import { colorToken } from '../../theme';


const PieChart = () => {
    const theme= useTheme();
    const color= colorToken(theme.palette.mode); 

    return (
        <ResponsivePie
            data={data}
            theme= {{
                axis: {
                    domain: {
                        line: {
                            stroke: color.grey[100]
                        }
                    },
                    legend: {
                        line: {
                            stroke: color.grey[100],
                            strokeWidth: 1
                        }
                    },
                    legends: {
                        text: {
                            fill: color.grey[100]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: color.grey[100],
                            strokeWidth: 1
                        },
                        text:{
                            fill: color.grey[100]
                        }
                    },
                },
                legend: {
                    text: {
                        fill: color.grey[100]
                    }
                },
            }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={color.grey[100]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            enableArcLabels={false}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: color.grey[100],
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#ffffff'
                            }
                        }
                    ]
                }
            ]}
        />
    );
};

export default PieChart;