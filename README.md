# Make Numbers

This is a simplistic random variate generator library written in Typescript and compiled to Javascript for distribution.
The latest version is always available at <https://www.npmjs.com/package/make-numbers>.

## Install

To install the library, first ensure that you have Npm set up, then simply run

```sh
npm install make-numbers
```

You can import the library into your project using:

```js
const numbers = require('make-numbers')

const normalRV = numbers.normal(mean, stdev)
```

## Configuration

The library exports a `setSeed()` method which allows you to set the seed of the pseudorandom number generator before conducting your experiments.
This allows you to create repeatable experiments by generating a sequence of random numbers repeatably.

## Distributions

#### Normal
```js
const normalRV = numbers.normal(mean, stdev)
```
#### Triangular
```js
const triangularRV = numbers.triangular(mode, left, right)
```
#### Erlang
```js
const erlangRV = numbers.erlang(n, shape)
```
#### Exponential
```js
const exponentialRV = numbers.exponential(lambda)
```
#### Weibull
```js
const weibullRV = numbers.weibull(lambda, shape)
```

#### Geometric
```js
const geometricRV = numbers.geometric(probabilityOfSuccess)
```

#### Negative Binomial
```js
const negbinRV = numbers.negbin(numberOfFailures, probabilityOfSuccess)
```
#### Poisson
```js
const poissonRV = numbers.poisson(lambda)
```

## License

MIT
