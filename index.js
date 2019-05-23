'use strict'

const crypto = require('crypto')

function __hash(algorithm, input, encoding) {
  const hash = crypto.createHash(algorithm)
  hash.update(input)
  return hash.digest(encoding)
}

module.exports = {
  md5: function(input, encoding='hex') {
    return __hash('md5', input, encoding)
  },
  sha1: function(input, encoding='hex') {
    return __hash('sha1', input, encoding)
  },
  sha256: function(input, encoding='hex') {
    return __hash('sha256', input, encoding)
  },
  sha384: function(input, encoding='hex') {
    return __hash('sha384', input, encoding)
  },
  sha512: function(input, encoding='hex') {
    return __hash('sha512', input, encoding)
  },
  ripemd: function(input, encoding='hex') {
    return __hash('ripemd', input, encoding)
  },
  whirlpool: function(input, encoding='hex') {
    return __hash('whirlpool', input, encoding)
  },
}
