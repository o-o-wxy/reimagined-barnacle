package com.bookcat.douban.repositories;

import com.bookcat.douban.formbean.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ESRepository {
    List<Book> findBykey(String key);
}
