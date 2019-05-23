const chai = require('chai')
const crypto = require('crypto')

const hash = require('..')

chai.should()

describe('hash', function() {
  beforeEach(function() {
    this.randomData = crypto.randomBytes(16).toString('hex')
  })

  describe('#md5', function() {
    it('returns hash for non-null input', function() {
      hash.md5(this.randomData).should.be.a('string')
    })

    it('fails for null input', function() {
      (function () { hash.md5(null) }).should.throw(TypeError)
    })

    it('returns a 128bit hash value', function() {
      hash.md5(this.randomData, 'hex').length.should.equal(32)
    })

    it('returns hash encoded in the correct format', function() {
      hash.md5(this.randomData, 'hex').should.be.a('string')
      hash.md5(this.randomData, 'hex').should.match(/^[a-f0-9]+$/)
    })

    it('returns the same hash for the same input', function() {
      const randomCopy = this.randomData
      const hashCopy = hash.md5(randomCopy)
      hash.md5(this.randomData).should.equal(hashCopy)
    })
  })

  describe('#sha1', function() {
    it('returns hash for non-null input', function() {
      hash.sha1(this.randomData).should.be.a('string')
    })

    it('fails for null input', function() {
      (function () { hash.sha1(null) }).should.throw(TypeError)
    })

    it('returns a 192bit hash value', function() {
      hash.sha1(this.randomData, 'hex').length.should.equal(40)
    })

    it('returns hash encoded in the correct format', function() {
      hash.sha1(this.randomData).should.be.a('string')
      hash.sha1(this.randomData, 'hex').should.match(/^[a-f0-9]+$/)
    })

    it('returns the same hash for the same input', function() {
      const randomCopy = this.randomData
      const hashCopy = hash.sha1(randomCopy)
      hash.sha1(this.randomData).should.equal(hashCopy)
    })
  })

  describe('#sha256', function() {
    it('returns hash for non-null input', function() {
      hash.sha256(this.randomData).should.be.a('string')
    })

    it('fails for null input', function() {
      (function () { hash.sha256(null) }).should.throw(TypeError)
    })

    it('returns a 256bit hash value', function() {
      hash.sha256(this.randomData, 'hex').length.should.equal(64)
    })

    it('returns hash encoded in the correct format', function() {
      hash.sha256(this.randomData).should.be.a('string')
      hash.sha256(this.randomData, 'hex').should.match(/^[a-f0-9]+$/)
    })

    it('returns the same hash for the same input', function() {
      const randomCopy = this.randomData
      const hashCopy = hash.sha256(randomCopy)
      hash.sha256(this.randomData).should.equal(hashCopy)
    })
  })

  describe('#sha384', function() {
    it('returns hash for non-null input', function() {
      hash.sha384(this.randomData).should.be.a('string')
    })

    it('fails for null input', function() {
      (function () { hash.sha384(null) }).should.throw(TypeError)
    })

    it('returns a 384bit hash value', function() {
      hash.sha384(this.randomData, 'hex').length.should.equal(96)
    })

    it('returns hash encoded in the correct format', function() {
      hash.sha384(this.randomData).should.be.a('string')
      hash.sha384(this.randomData, 'hex').should.match(/^[a-f0-9]+$/)
    })

    it('returns the same hash for the same input', function() {
      const randomCopy = this.randomData
      const hashCopy = hash.sha384(randomCopy)
      hash.sha384(this.randomData).should.equal(hashCopy)
    })
  })

  describe('#sha512', function() {
    it('returns hash for non-null input', function() {
      hash.sha512(this.randomData).should.be.a('string')
    })

    it('fails for null input', function() {
      (function () { hash.sha512(null) }).should.throw(TypeError)
    })

    it('returns a 512bit hash value', function() {
      hash.sha512(this.randomData, 'hex').length.should.equal(128)
    })

    it('returns hash encoded in the correct format', function() {
      hash.sha512(this.randomData).should.be.a('string')
      hash.sha512(this.randomData, 'hex').should.match(/^[a-f0-9]+$/)
    })

    it('returns the same hash for the same input', function() {
      const randomCopy = this.randomData
      const hashCopy = hash.sha512(randomCopy)
      hash.sha512(this.randomData).should.equal(hashCopy)
    })
  })
})
