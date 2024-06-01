export default function wordsPerMinute(blogDesc: string) {
    const wordsPerMinute = 150;
    const words = blogDesc.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}