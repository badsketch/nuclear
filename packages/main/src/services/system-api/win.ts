import { Event } from 'electron';
import NuclearApi from '../../utils/nuclear-api';
import { mprisController } from '../../utils/decorators';

@mprisController()
class WindowsMediaService implements NuclearApi {
  rendererWindow: Event['sender'];

  onPlay() {}
  onPause() {}
  play() {}
  pause() {}
  listen() {}
}

export default WindowsMediaService;
