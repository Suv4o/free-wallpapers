export default function checkIfItemExist(pId: string, allImgsPid_url: [string, string][]): [boolean, string] {
    let idx = -1
    const isUploaded = allImgsPid_url.some((public_id, index) => {
        idx = index
        return public_id[0] === pId
    })
    return [isUploaded, allImgsPid_url[idx][1]]
}
