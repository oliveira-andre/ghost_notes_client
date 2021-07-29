import * as openpgp from 'openpgp';

const loadPrivateKey = async () => {
  const currentPrivateKey = `${localStorage.getItem('key')}`;
  let privateKey;
  const readedPrivateKey = await openpgp.readPrivateKey({ armoredKey: currentPrivateKey });

  if (currentPrivateKey) {
    try {
      privateKey = await openpgp.decryptKey({
        privateKey: readedPrivateKey,
        passphrase: process.env.REACT_APP_SECRET_KEY,
      });
    } catch {
      privateKey = readedPrivateKey;
    }
  }

  return privateKey;
};

const decrypt = async(message, setMessage) => {
  const privateKey = await loadPrivateKey();

  if (privateKey !== null && privateKey !== undefined && privateKey !== '') {
    const encryptedAndSignedMessage = message;

    const currentMessage = await openpgp.readMessage({ armoredMessage: `${encryptedAndSignedMessage}` });

    const { data: decrypted } = await openpgp.decrypt({
      message: currentMessage,
      decryptionKeys: privateKey,
    });

    await setMessage(decrypted);
  }
}

export default decrypt;
