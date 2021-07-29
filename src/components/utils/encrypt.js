import * as openpgp from 'openpgp';

const loadPublicKey = async () => {
  const oldPublicKey = localStorage.getItem('publicKey');
  let  currentPublicKey;

  if (oldPublicKey === null || oldPublicKey === '') {
    const { privateKey, publicKey, revocationCertificate } = await openpgp.generateKey({
      type: 'ecc',
      curve: 'curve25519',
      userIDs: [{ name: 'Anonymous', email: 'root@anonymous.com' }],
      passphrase: process.env.REACT_APP_SECRET_KEY,
      format: 'armored'
    });
    
    localStorage.setItem('key', privateKey);
    localStorage.setItem('publicKey', publicKey);
    currentPublicKey = publicKey;
  } else {
    currentPublicKey = oldPublicKey;
  }

  return await openpgp.readKey({ armoredKey: currentPublicKey });;
};

const encrypt = async(message, setMessage) => {
  const publicKey = await loadPublicKey();

  const currentMessage = await openpgp.createMessage({ text: message });
  const encryptedMessage = await openpgp.encrypt({
    message: currentMessage,
    encryptionKeys: publicKey
  });

  await setMessage(encryptedMessage);
}

export default encrypt;
