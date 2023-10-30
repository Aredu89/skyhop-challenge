export const formatSize = (bytes: number) => {
  if(bytes >= 1073741824) {
    return (bytes / 1073741824).toFixed(1) + 'GB';
  }
  if(bytes >= 1048576) {
    return (bytes / 1048576).toFixed(1) + 'MB';
  }
  if(bytes >= 1024) {
    return (bytes / 1024).toFixed(1) + 'KB';
  }
  if(bytes > 1) {
    return bytes + 'bytes';
  }
  if(bytes === 1) {
    return bytes + 'byte'
  }
  return '0 bytes'
};