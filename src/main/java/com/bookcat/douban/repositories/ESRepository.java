package com.bookcat.douban.repositories;

import com.bookcat.douban.formbean.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

public interface ESRepository {
    List<Book> findBykey(String key);
    List<Book> moreLike(int id);
    Set<String> matchFront(String key);
}
