export const copyToClipboard = (textToCopy: string): Promise<boolean> => {
    return navigator.clipboard.writeText(textToCopy).then(function () {
        return true;
    }, function () {
        return false;
    });
}