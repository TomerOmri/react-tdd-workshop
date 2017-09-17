import {expect} from 'chai';
import {getGameStatus} from './Board';
import React from 'react';
import {mount} from 'enzyme';
import Board from './Board';

let wrapper;
const render = () => mount(
  <Board/>, {attachTo: document.createElement('div')}
);

const clickCellAt = index => wrapper.find('[data-hook="cell"]').at(index).simulate('click');
const getCellTextAt = index => wrapper.find('[data-hook="cell"]').at(index).text();
const getTieMessage = () => wrapper.find('[data-hook="tie-message"]').text();

describe('Board', () => {
  
    afterEach(() => wrapper.detach());
  
    it('Player should not click on a taken cell', () => {
      wrapper = render();
      clickCellAt(0);
      expect(getCellTextAt(0)).to.eq('X');
      clickCellAt(0);
      expect(getCellTextAt(0)).to.eq('X');
    });
  });


describe('getGameStatus', () => {

  describe('checking for winner in rows', () => {
    it('"X" should win for first row', () => {
      const borad = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
      expect(getGameStatus(borad)).to.equal('X');
    });

    it('"O" should win for first row', () => {
      const borad = [['O', 'O', 'O'], ['', '', ''], ['', '', '']];
      expect(getGameStatus(borad)).to.equal('O');
    });

    it('"X" should win for sec row', () => {
      const borad = [['', '', ''], ['X', 'X', 'X'], ['', '', '']];
      expect(getGameStatus(borad)).to.equal('X');
    });

    it('"O" should win for sec row', () => {
      const borad = [['', '', ''], ['O', 'O', 'O'], ['', '', '']];
      expect(getGameStatus(borad)).to.equal('O');
    });

    it('"X" should win for third row', () => {
      const borad = [['', '', ''], ['', '', ''], ['X', 'X', 'X']];
      expect(getGameStatus(borad)).to.equal('X');
    });

    it('"O" should win for third row', () => {
      const borad = [['', '', ''], ['', '', ''], ['O', 'O', 'O']];
      expect(getGameStatus(borad)).to.equal('O');
    });
})
  describe('checking for winner in columns', () => {
    it('"X" should win for first column', () => {
      const borad = [['X', '', ''], ['X', '', ''], ['X', '', '']];
      expect(getGameStatus(borad)).to.equal('X');
    });
    it('"X" should win for second column', () => {
      const borad = [['', 'X', ''], ['', 'X', ''], ['', 'X', '']];
      expect(getGameStatus(borad)).to.equal('X');
    });
    it('"X" should win for third column', () => {
      const borad = [['', '', 'X'], ['', '', 'X'], ['', '', 'X']];
      expect(getGameStatus(borad)).to.equal('X');
    });
    it('"O" should win for first column', () => {
      const borad = [['O', '', ''], ['O', '', ''], ['O', '', '']];
      expect(getGameStatus(borad)).to.equal('O');
    });
    it('"O" should win for second column', () => {
      const borad = [['', 'O', ''], ['', 'O', ''], ['', 'O', '']];
      expect(getGameStatus(borad)).to.equal('O');
    });
    it('"X" should win for third column', () => {
      const borad = [['', '', 'O'], ['', '', 'O'], ['', '', 'O']];
      expect(getGameStatus(borad)).to.equal('O');
    });
  })

  describe('checking for winner in columns', () => {
    it('"X" should win for first diagnle', () => {
      const borad = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];
      expect(getGameStatus(borad)).to.equal('X');
    });
    
  })
});
