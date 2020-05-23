package com.bookcat.douban.controller;

import com.bookcat.douban.entity.BooksEntity;
import com.bookcat.douban.bean.Book;
import com.bookcat.douban.repository.BookRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {
    private final BookRepository repository;
    BookController(BookRepository repository){
        this.repository = repository;
    }

    @PostMapping("/book")
    List<Book> findByKey(@RequestParam("key") String key) {
        System.out.println(key);
        List<BooksEntity> retEntity = repository.findByKey(key);
        List<Book>  ret = new ArrayList<>();

        if (retEntity.size()!=0) {
            for (BooksEntity booksEntity : retEntity) {
                Book book = new Book();
                BeanUtils.copyProperties(booksEntity, book);
                ret.add(book);
            }
        }
        return ret;
    }

//    @PostMapping("/findByName")
//    List<BooksEntity> findByName(@RequestBody Book queryExample) {
//        return repository.findByName(queryExample.getName());
//    }
}
