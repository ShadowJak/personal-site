/**
 * Calculates the percentage position of a post within a range of posts,
 * based on the specified position ('start' or 'end').
 *
 * @param shownPosts - The number of posts to be shown.
 * @param totalPosts - The total number of posts available.
 * @param position - The position to calculate from, either 'start' or 'end'. Defaults to 'start'.
 * @returns The calculated percentage position as a number.
 */
export const fencePost = (
    shownPosts: number,
    totalPosts: number,
    position: 'start' | 'end' = 'end'
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