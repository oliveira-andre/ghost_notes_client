import * as openpgp from 'openpgp';

const loadPrivateKey = async () => {
  const currentPrivateKey = localStorage.getItem('key');
  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: currentPrivateKey }),
    passphrase: 'super long and hard to guess secret'
  });

  return privateKey;
};

const decrypt = async(message, setMessage) => {
  const privateKey = await loadPrivateKey();
  const encryptedAndSignedMessage = message;

  const currentMessage = await openpgp.readMessage({ armoredMessage: encryptedAndSignedMessage });

  const { data: decrypted } = await openpgp.decrypt({
    message: currentMessage,
    decryptionKeys: privateKey,
  });

  await setMessage(decrypted);
}

export default decrypt;
