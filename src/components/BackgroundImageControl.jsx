import React, { useRef, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { readLocalImage } from '../utils/local-images.js';

export function BackgroundImageControl({ image, onChange }) {
  const input = useRef(null);
  const [message, setMessage] = useState('');
  const chooseImage = async (file) => {
    if (!file) return;
    try { onChange(await readLocalImage(file)); setMessage(''); }
    catch (error) { setMessage(error.message); }
  };

  return <section className="background-image-control">
    <b>BACKGROUND IMAGE</b>
    <input ref={input} className="photo-input-hidden" type="file" accept="image/*" aria-label="Choose a background image" onChange={(event) => { chooseImage(event.target.files?.[0]); event.target.value = ''; }} />
    <button type="button" className="photo-upload" onClick={() => input.current?.click()}>
      <ImagePlus size={16} />
      <span><b>{image ? 'Replace background image' : 'Upload a background image'}</b><small>Optional · JPG, PNG, or WebP · up to 512 KB</small></span>
    </button>
    {message && <p className="photo-upload-message" role="status">{message}</p>}
    {image && <div className="background-image-preview"><img src={image} alt="Current custom background" /><button type="button" onClick={() => onChange('')} aria-label="Remove background image"><X size={13} /> Remove</button></div>}
    <p className="local-photo-note">Saved with this browser draft only. Cloud background storage will be added later.</p>
  </section>;
}
