export default function useChat() {
  const openChat = () => {
    window.Intercom && window.Intercom('show');
  };

  const showNewMessage = (msg: string) => {
    window.Intercom && window.Intercom('showNewMessage', msg);
  };

  const showArticle = (id: number) => {
    window.Intercom && window.Intercom('showArticle', id);
  };

  return {
    openChat,
    showNewMessage,
    showArticle,
  };
}
