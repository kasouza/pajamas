export function range(min, max, step) {
    if (step == undefined) {
        step = min < max ? 1 : -1
    }

    if (isNaN(min) || isNaN(max) || isNaN(step)) return
    if (step == 0 || min == max) return
    if (min > max && step > 0) return

    return new Array(Math.floor(max / step))
        .fill(0)
        .map((_, i) => i * step + min)
}