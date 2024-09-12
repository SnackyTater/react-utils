export const sleep = async(timer = 500) => {
    return new Promise<void>((res) => {
        setTimeout(() => {
            res()
        }, timer)
    })
}