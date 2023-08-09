function groupAnagrams(data) {
    const Groups = [];
    const visitedIndices = [];
    for (let i = 0; i < data.length; i++) {
        if (visitedIndices.includes(i)) {
            continue;
        }
        const currentAnagramGroup = [data[i]];
        visitedIndices.push(i);
        for (let j = i + 1; j < data.length; j++) {
            if (isAnagram(data[i], data[j])) {
                currentAnagramGroup.push(data[j]);
                visitedIndices.push(j);
            }
        }
        Groups.push(currentAnagramGroup);
    }
    return Groups;
}

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;
}

const inputArray = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = groupAnagrams(inputArray);

console.log(result);
