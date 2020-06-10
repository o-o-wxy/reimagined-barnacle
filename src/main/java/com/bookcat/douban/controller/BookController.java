package com.bookcat.douban.controller;

import com.bookcat.douban.entity.BooksEntity;
import com.bookcat.douban.formbean.Book;
import com.bookcat.douban.repositories.BookRepository;
import com.bookcat.douban.repositories.ESRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {
    private final BookRepository repository;
    private final ESRepository esRepository;
    BookController(BookRepository repository,ESRepository esRepository){
        this.repository = repository;
        this.esRepository = esRepository;
    }

    //搜索
    @PostMapping("/book")
    List<Book> findByKey(@RequestParam("key") String key) {
        return esRepository.findBykey(key);
    }
    //基于summary的相似查询
    @PostMapping("/morelike")
    List<Book> moreLike(@RequestParam("id") int id){
        return esRepository.moreLike(id);
    }

//    @PostMapping("/find")
//    @ResponseBody
//    List<BooksEntity> findByName(@RequestParam("key") String key) {
//        return repository.findByNameOrsOrSubNameOrsOrSeriesOrpOrPublisherOrAuthorsOrTagsLike(key);
//    }

    @GetMapping("/book/{id}")
    Book findById(@PathVariable int id ) {
        BooksEntity retEntity = repository.findById(id);
        Book ret = new Book();
        BeanUtils.copyProperties(retEntity, ret);

        return ret;
    }

    @GetMapping("/book/recommend")
    List<Book> findRecommend() {
        List<BooksEntity> retEntity = repository.findRecommend();
        List<Book>  ret = new ArrayList<Book>();

        if (retEntity.size()!=0) {
            for (BooksEntity booksEntity : retEntity) {
                Book book = new Book();
                BeanUtils.copyProperties(booksEntity, book);
                ret.add(book);
            }
        }
        return ret;
    }

    @GetMapping("/book/hot")
    List<Book> findHot() {
        List<BooksEntity> retEntity = repository.findHot();
        List<Book>  ret = new ArrayList<Book>();

        if (retEntity.size()!=0) {
            for (BooksEntity booksEntity : retEntity) {
                Book book = new Book();
                BeanUtils.copyProperties(booksEntity, book);
                ret.add(book);
            }
        }
        return ret;
    }

    @GetMapping("/book/latest")
    List<Book> findLatest() {
        List<BooksEntity> retEntity = repository.findLatest();
        List<Book>  ret = new ArrayList<Book>();

        if (retEntity.size()!=0) {
            for (BooksEntity booksEntity : retEntity) {
                Book book = new Book();
                BeanUtils.copyProperties(booksEntity, book);
                ret.add(book);
            }
        }
        return ret;
    }

    @PostMapping("/look/{id}")
    int look(@PathVariable int id ) {
        int ret = repository.look(id);
        return ret;
    }
}
