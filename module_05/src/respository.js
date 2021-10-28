import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
    const url = new URL('../database.json', import.meta.url);

    const currentData = await readFile(url, "utf8");

    const formatData = JSON.parse(currentData);
    formatData.push(data);

    await writeFile(url, JSON.stringify(formatData));
}