import Api from './api';

const NotesService = {
  create: (params) => Api.post('/notes', { notes: params }),
  show: (slug) => Api.get(`/notes/${slug}`),
  show_with_password: (slug, password) => Api.get(`/notes/${slug}/password/${password}`),
}

export default NotesService;
