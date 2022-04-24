import createDbRecord from './createDbRecord';

describe('createUserDbRecord', () => {
  it('inserts user record', () => {
    const createdAt = new Date;

    const user = createDbRecord({
      githubToken: 'some token',
      githubUsername: 'somelogin',
      email: 'ang@here.com',
      createdAt,
      updatedAt: createdAt,
    }).then((userRecord) => {
      expect(userRecord.githubToken).toBe('some token');
      expect(userRecord.githubUsername).toBe('somelogin');
      expect(userRecord.createdAt).toBe(createdAt);
      expect(userRecord.updatedAt).toBe(createdAt);
    });
  });
});

// dupe email