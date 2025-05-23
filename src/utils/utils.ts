/**
 * Calculates the percentage position of a post within a range of posts,
 * based on the specified position ('beginning' or 'end').
 *
 * @param shownPosts - The number of posts to be shown.
 * @param totalPosts - The total number of posts available.
 * @param position - The position to calculate from, either 'beginning' or 'end'. Defaults to 'end'.
 * @returns The calculated percentage position as a number.
 */
export const fencePost = (
    shownPosts: number,
    totalPosts: number,
    position: 'beginning' | 'end' = 'end'
): number => {
    let val;
    const ratio = (shownPosts - 1) / (totalPosts - 1);

    if (position === 'end') {
        val = 100 - (ratio * 100);
    } else {
        val = (ratio * 100);
    }

    return val;
}

/**
 * Calculates the interval width between data points for a chart, adjusted by subtracting 1.
 *
 * @param posts - The total number of data points (posts) to be displayed on the chart.
 * @param chartWidth - The total width of the chart in pixels or units.
 * @returns The computed interval width between each data point, minus 1 unit.
 */
export const halfInterval = (posts: number, chartWidth: number) => {
    return (chartWidth/(posts - 1)) - 1;
}