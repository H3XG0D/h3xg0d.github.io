const useTitle = (title: string) => {
  if (!document) return;
  document.title = `${title} | H3XG0D.`;
};

export default useTitle;
