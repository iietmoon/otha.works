import React from 'react';

interface ShareButtonsProps{
    title: string
    url: string
}

const ShareButtons = ({ title, url }:ShareButtonsProps) => {
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(`${title}: ${url}`)}`;
  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;

  return (
    <div className='ShareButtons'>
      <p>SHARE THIS POST</p>
      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
};

export default ShareButtons;
